package com.StudySync.StudySync.Backend.service;

import com.StudySync.StudySync.Backend.model.Task;
import com.StudySync.StudySync.Backend.model.User;
import com.StudySync.StudySync.Backend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserService userService;

    public TaskService(TaskRepository taskRepository, UserService userService) {
        this.taskRepository = taskRepository;
        this.userService = userService;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public List<Task> getTasksByUser(Long userId) {
        return taskRepository.findByUserId(userId);
    }

    public List<Task> getTasksByUserAndStatus(Long userId, Task.TaskStatus status) {
        return taskRepository.findByUserIdAndStatus(userId, status);
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id: " + id));
    }

    public Task createTask(Long userId, Task task) {
        User user = userService.getUserById(userId);
        task.setUser(user);
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task updatedTask) {
        Task existing = getTaskById(id);
        existing.setTitle(updatedTask.getTitle());
        existing.setDescription(updatedTask.getDescription());
        existing.setDeadline(updatedTask.getDeadline());
        existing.setStatus(updatedTask.getStatus());
        return taskRepository.save(existing);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
