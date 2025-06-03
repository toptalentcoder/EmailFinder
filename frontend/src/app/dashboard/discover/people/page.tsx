interface PeoplePageProps {
  togglePanel: () => void;
}

export default function PeoplePage({ togglePanel }: PeoplePageProps) {
  return (
    <div className="flex">
      <div className="flex-1 p-8 bg-white">
        <h1 className="text-black">People Page</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={togglePanel} // ✅ Toggle only panel visibility
        >
          Click Me
        </button>
        <p>This is the people page.</p>
      </div>
    </div>
  );
}
