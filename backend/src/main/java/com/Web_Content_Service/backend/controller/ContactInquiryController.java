package com.Web_Content_Service.backend.controller;

import com.Web_Content_Service.backend.entity.ContactInquiry;
import com.Web_Content_Service.backend.service.ContactInquiryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact-inquiries")
@CrossOrigin(origins = "*")
public class ContactInquiryController {

    private final ContactInquiryService contactInquiryService;

    public ContactInquiryController(
            ContactInquiryService contactInquiryService) {

        this.contactInquiryService = contactInquiryService;
    }

    @PostMapping
    public ResponseEntity<ContactInquiry> createInquiry(
            @RequestBody ContactInquiry inquiry) {

        ContactInquiry savedInquiry =
                contactInquiryService.saveInquiry(inquiry);

        return ResponseEntity.ok(savedInquiry);
    }

    @GetMapping
    public ResponseEntity<List<ContactInquiry>> getAllInquiries() {

        return ResponseEntity.ok(
                contactInquiryService.getAllInquiries()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContactInquiry> getInquiryById(
            @PathVariable Integer id) {

        ContactInquiry inquiry =
                contactInquiryService.getInquiryById(id);

        if (inquiry == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(inquiry);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInquiry(
            @PathVariable Integer id) {

        contactInquiryService.deleteInquiry(id);

        return ResponseEntity.noContent().build();
    }
}