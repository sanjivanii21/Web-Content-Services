package com.Web_Content_Service.backend.service;

import com.Web_Content_Service.backend.entity.ContactInquiry;
import com.Web_Content_Service.backend.repository.ContactInquiryRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ContactInquiryService {

    private final ContactInquiryRepository contactInquiryRepository;

    public ContactInquiryService(
            ContactInquiryRepository contactInquiryRepository) {

        this.contactInquiryRepository = contactInquiryRepository;
    }

    public ContactInquiry saveInquiry(ContactInquiry inquiry) {

        if (inquiry.getSubmittedAt() == null) {
            inquiry.setSubmittedAt(LocalDateTime.now());
        }

        return contactInquiryRepository.save(inquiry);
    }

    public List<ContactInquiry> getAllInquiries() {

        return contactInquiryRepository.findAll();
    }

    public ContactInquiry getInquiryById(Integer id) {

        return contactInquiryRepository
                .findById(id)
                .orElse(null);
    }

    public void deleteInquiry(Integer id) {

        contactInquiryRepository.deleteById(id);
    }
}