import Note from "../models/User.js";

export const renderNoteForm = (req, res) => res.render("notes/perfil");

export const renderNotes = async (req, res) => {
    const notes = await Note.find({ user: req.user.id })
      .sort({ date: "desc" })
      .lean();
    res.render("notes/all-notes", { notes });
  };