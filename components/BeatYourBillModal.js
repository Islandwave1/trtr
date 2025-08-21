export default function BeatYourBillModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Beat Your Bill</h2>
        <form method="POST" action="mailto:josh@islandwave.ca" encType="multipart/form-data">
          <label className="block mb-2">Upload Your Bill:</label>
          <input type="file" name="bill" className="mb-4 border p-2 w-full" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </form>
        <button onClick={onClose} className="mt-4 text-blue-600 underline">Close</button>
      </div>
    </div>
  );
}
