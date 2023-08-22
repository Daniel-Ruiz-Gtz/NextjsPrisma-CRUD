import { Note } from "@prisma/client";
import { useNotes } from "@/context/NoteContext";
import { HiTrash, HiPencil } from "react-icons/hi";

function NoteCard({ note }: { note: Note }) {
  const { deleteNote, setSelectedNote } = useNotes();
  return (
    <div
      key={note.id}
      className="bg-slate-400 p-4 rounded-md m-2 flex justify-between"
    >
      <div>
        <h1 className="text-2xl font-bold"> {note.title} </h1>
        <p> {note.content} </p>
        <p> {new Date(note.createAt).toLocaleDateString()} </p>
      </div>
      <div className="flex gap-x-2">
        <button
          onClick={async () => {
            if (confirm("Are you sure you want to delete this note?"))
              await deleteNote(Number(note.id));
          }}
        >
          <HiTrash className="text-2xl text-red-700" />
        </button>
        <button
          onClick={async () => {
            setSelectedNote(note);
          }}
        >
          <HiPencil className="text-2x" />
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
