package com.Web_Content_Service.backend.service;

import com.Web_Content_Service.backend.entity.Application;
import com.Web_Content_Service.backend.repository.ApplicationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;

    public ApplicationService(ApplicationRepository applicationRepository) {
        this.applicationRepository = applicationRepository;
    }

    public Application saveApplication(Application application) {

        if (application.getCreatedAt() == null) {
            application.setCreatedAt(LocalDateTime.now());
        }

        if (application.getStatus() == null || application.getStatus().isBlank()) {
            application.setStatus("PENDING");
        }

        return applicationRepository.save(application);
    }

    public List<Application> getAllApplications() {
        return applicationRepository.findAll();
    }

    public Application getApplicationById(Long id) {
        return applicationRepository.findById(id).orElse(null);
    }

    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }
}