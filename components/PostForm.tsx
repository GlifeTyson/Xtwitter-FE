import Image from "next/image";
import React, { useState } from "react";

const PostForm = () => {
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form submission logic here, e.g., sending data to the server
    console.log("Text:", text);
    console.log("Image:", image);
    // Reset form fields
    setText("");
    setImage(null);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[40vw] h-1/3 border-[1px] border-gray-500 p-8 flex flex-col justify-center gap-3"
    >
      <div className="flex gap-2 items-center">
        <Image
          className="rounded-full border-[1px] border-gray-500"
          src={"/favicon.ico"}
          alt="icon"
          width={40}
          height={40}
        ></Image>
        <input
          placeholder="What's happening?!"
          value={text}
          onChange={() => handleTextChange}
          className="w-full h-2/3 bg-transparent placeholder:text-xl"
        />
      </div>
      <span className="block w-4/5 h-[1px] bg-gray-500"></span>
      <div className="flex h-1/4 flex-row justify-between">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-fit"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full w-16"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
