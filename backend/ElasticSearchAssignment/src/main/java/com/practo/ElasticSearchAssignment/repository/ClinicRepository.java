package com.practo.ElasticSearchAssignment.repository;

import com.practo.ElasticSearchAssignment.entity.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClinicRepository extends JpaRepository<Clinic, Long> {
}
