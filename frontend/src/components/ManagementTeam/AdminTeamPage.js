import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminTeamPage = () => {
  const [team, setTeam] = useState([]);
  const [editMember, setEditMember] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    bio: "",
    image: "",
  });

  useEffect(() => {
    fetchTeam();
  }, []);

  // ✅ Fetch team data
  const fetchTeam = async () => {
    try {
      const res = await axios.get("http://localhost:8001/api/team");
      setTeam(res.data);
    } catch (err) {
      console.error("Error fetching team:", err);
    }
  };

  // ✅ Handle field change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Reset form
  const resetForm = () => {
    setFormData({ name: "", designation: "", bio: "", image: "" });
    setEditMember(null);
    setIsAdding(false);
  };

  // ✅ Edit handler
  const handleEdit = (member) => {
    setIsAdding(false);
    setEditMember(member);
    setFormData({
      name: member.name,
      designation: member.designation,
      bio: member.bio.join("\n"),
      image: member.image,
    });
  };

  // ✅ Update existing member
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editMember) return;

    try {
      const bioArray = formData.bio
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line);

      await axios.put(`http://localhost:8001/api/team/${editMember.id}`, {
        ...formData,
        bio: bioArray,
      });

      alert("✅ Member updated successfully!");
      resetForm();
      fetchTeam();
    } catch (err) {
      console.error("Error updating:", err);
      alert("❌ Failed to update. Check console for details.");
    }
  };

  // ✅ Add new member
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const bioArray = formData.bio
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line);

      await axios.post("http://localhost:8001/api/team", {
        ...formData,
        bio: bioArray,
      });

      alert("✅ New member added successfully!");
      resetForm();
      fetchTeam();
    } catch (err) {
      console.error("Error adding member:", err);
      alert("❌ Failed to add new member.");
    }
  };

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin - Manage Team</h1>
        <button
          onClick={() => {
            setIsAdding(true);
            setEditMember(null);
            setFormData({ name: "", designation: "", bio: "", image: "" });
          }}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          ➕ Add New Member
        </button>
      </div>

       {/* ✅ Add / Edit Form */}
      {(editMember || isAdding) && (
        <form
          onSubmit={editMember ? handleUpdate : handleAdd}
          className="mt-10 bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-4xl mx-auto"
        >
          <h2 className="text-xl font-semibold mb-4">
            {editMember ? "Edit Member" : "Add New Member"}
          </h2>

          <div className="grid gap-3">
             <label className="block text-gray-700 font-medium mb-1">Full Name :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 rounded"
              required
            />
             <label className="block text-gray-700 font-medium mb-1">Designation :</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Designation"
              className="border p-2 rounded"
              required
            />
             <label className="block text-gray-700 font-medium mb-1">Description :</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Bio (one paragraph per line)"
              className="border p-2 rounded h-32"
              required
            />
            <label className="block text-gray-700 font-medium mb-1">Image :</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="border p-2 rounded"
              required
            />
          </div>

          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${
                editMember
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-green-600 hover:bg-green-700"
              } text-white px-4 py-2 rounded`}
            >
              {editMember ? "Save Changes" : "Add Member"}
            </button>
          </div>
        </form>
      )}

      {/* ✅ Team Table */}
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Designation</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {team.map((m) => (
            <tr key={m.id} className="text-center">
              <td className="p-2 border">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-16 h-16 object-cover rounded-full mx-auto"
                />
              </td>
              <td className="p-2 border">{m.name}</td>
              <td className="p-2 border">{m.designation}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleEdit(m)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default AdminTeamPage;
