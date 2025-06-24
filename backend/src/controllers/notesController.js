import Note from "../../models/Note.js";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1}); // -1 will sort in desc, fetch the newest first
        res.status(200).json(notes);

    } catch (error) {
        console.log("error in getAllNotes controller function", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message: "Note not found"});
        res.status(200).json(note);
    } catch (error) {
        console.log("error in getNote controller function", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json({ message: "Note created succesfully" });

    } catch (error) {
        console.log("error in createNote controller function", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateNote = async (req, res) => {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if(!updatedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json({message: "Note updated succesfully"});
    } catch (error) {
        console.log("error in updateNote controller function", error);
        res.status(500).json({ message: "Internal server error" });     
    }

}

export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message: "Note not found"});
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.log("error in deleteNote controller function", error);
        res.status(500).json({ message: "Internal server error" });       
    }
}