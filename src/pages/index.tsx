import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can use the `file` variable to access the selected image and perform further processing, such as sending it to the TensorFlow model or the Discogs API.
  };

  return (
    <div>
      <h1>Album Reader</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-input">Upload an image of a vinyl record:</label>
        <input type="file" id="file-input" accept="image/*" onChange={handleFileInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
