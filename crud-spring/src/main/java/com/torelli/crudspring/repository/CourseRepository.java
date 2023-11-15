package com.torelli.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.torelli.crudspring.domain.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    
}
