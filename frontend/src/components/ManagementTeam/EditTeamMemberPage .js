// File: src/components/ManagementTeam/EditTeamMemberPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditTeamMemberPage = () => {
  const { id } = useParams(); // Get member ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    bio: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch member data on page load
  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await axios.get(`http://localhost:8001/api/team/${id}`);
        const member = res.data;
        setFormData({
          name: member.name,
          designation: member.designation,
          bio: member.bio.join("\n"),
          image: member.image,
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching member:", err);
        alert("Failed to fetch member data");
      }
    };
    fetchMember();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const bioArray = formData.bio
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line);

      await axios.put(`http://localhost:8001/api/team/${id}`, {
        ...formData,
        bio: bioArray,
      });

      alert("✅ Updated Successfully!");
      navigate("/admin-team"); // Redirect back to admin team page
    } catch (err) {
      console.error("Error updating:", err);
      alert("❌ Failed to update. Check console.");
    }
  };

  if (loading) return <p className="text-center py-10">Loading member data...</p>;

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Team Member</h1>

      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-lg shadow-lg border border-gray-200"
      >
        <div className="grid gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-3 rounded-lg"
            required
          />
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            className="border p-3 rounded-lg"
            required
          />
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Bio (one paragraph per line)"
            className="border p-3 rounded-lg h-40"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-3 rounded-lg"
            required
          />
        </div>

        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/admin-team")}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTeamMemberPage;
