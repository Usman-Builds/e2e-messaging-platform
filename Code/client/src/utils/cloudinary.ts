// src/utils/uploadToCloudinary.ts

const CLOUDINARY_UPLOAD_PRESET = 'unsigned_uploads';
const CLOUDINARY_CLOUD_NAME = 'de9h8z5nl';

export const uploadToCloudinary = async (file: File) => {
  if (!file) throw new Error("No file provided");

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error?.message || "Upload failed");
    }

    return data.secure_url; // ✅ final image URL
  } catch (err) {
    throw err;
  }
};