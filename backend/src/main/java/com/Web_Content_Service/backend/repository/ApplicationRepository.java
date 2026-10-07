package com.Web_Content_Service.backend.repository;

import com.Web_Content_Service.backend.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application, Long> {

}