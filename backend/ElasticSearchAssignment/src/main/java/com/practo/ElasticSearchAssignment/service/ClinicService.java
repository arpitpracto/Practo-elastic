package com.practo.ElasticSearchAssignment.service;

import com.practo.ElasticSearchAssignment.entity.Clinic;
import com.practo.ElasticSearchAssignment.repository.ClinicRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ClinicService {
    private final ClinicRepository clinicRepository;
    private final SearchService searchService;

    public ClinicService(ClinicRepository clinicRepository, SearchService searchService) {
        this.clinicRepository = clinicRepository;
        this.searchService = searchService;
    }

    public Clinic createClinic(Clinic clinic) {
        clinicRepository.save(clinic);
        searchService.indexClinic(clinic);
        return clinic;
    }


    public List<Clinic> getAllClinics() {
        return clinicRepository.findAll();
    }

    public Optional<Clinic> getClinicById(Long id) {
        return clinicRepository.findById(id);
    }

    public Clinic updateClinic(Long id, Clinic updatedClinic) {
        return clinicRepository.findById(id).map(existingClinic -> {
            existingClinic.setName(updatedClinic.getName());
            existingClinic.setAddress(updatedClinic.getAddress());
            existingClinic.setContactNumber(updatedClinic.getContactNumber());
            existingClinic.setEmail(updatedClinic.getEmail());
            existingClinic.setWebsite(updatedClinic.getWebsite());
            clinicRepository.save(existingClinic);
            searchService.indexClinic(existingClinic);
            return existingClinic;
        }).orElseThrow(() -> new RuntimeException("Clinic not found"));
    }

    public void deleteClinic(Long id) {
        clinicRepository.deleteById(id);
    }
}
