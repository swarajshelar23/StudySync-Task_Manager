package com.StudySync.StudySync.Backend.service;

import com.StudySync.StudySync.Backend.model.Note;
import com.StudySync.StudySync.Backend.model.User;
import com.StudySync.StudySync.Backend.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;
    private final UserService userService;

    public NoteService(NoteRepository noteRepository, UserService userService) {
        this.noteRepository = noteRepository;
        this.userService = userService;
    }

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public List<Note> getNotesByUser(Long userId) {
        return noteRepository.findByUserId(userId);
    }

    public Note getNoteById(Long id) {
        return noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found with id: " + id));
    }

    public Note createNote(Long userId, Note note) {
        User user = userService.getUserById(userId);
        note.setUser(user);
        return noteRepository.save(note);
    }

    public Note updateNote(Long id, Note updatedNote) {
        Note existing = getNoteById(id);
        existing.setTitle(updatedNote.getTitle());
        existing.setContent(updatedNote.getContent());
        return noteRepository.save(existing);
    }

    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }
}
