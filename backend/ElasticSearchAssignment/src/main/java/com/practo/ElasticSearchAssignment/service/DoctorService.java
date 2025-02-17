package com.practo.ElasticSearchAssignment.service;

import com.practo.ElasticSearchAssignment.entity.Doctor;
import com.practo.ElasticSearchAssignment.repository.ClinicRepository;
import com.practo.ElasticSearchAssignment.repository.DoctorRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {
    private final DoctorRepository doctorRepository;
    private final ClinicRepository clinicRepository;
    private final SearchService searchService;

    public DoctorService(DoctorRepository doctorRepository, ClinicRepository clinicRepository, SearchService searchService) {
        this.doctorRepository = doctorRepository;
        this.clinicRepository = clinicRepository;
        this.searchService = searchService;
    }

    public Doctor createDoctor(Doctor doctor, Long clinicId) {
        return clinicRepository.findById(clinicId).map(clinic -> {
            doctor.setClinic(clinic);
            doctorRepository.save(doctor);
            searchService.indexDoctor(doctor);
            return doctor;
        }).orElseThrow(() -> new RuntimeException("Clinic not found"));
    }


    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public Optional<Doctor> getDoctorById(Long id) {
        return doctorRepository.findById(id);
    }

    public List<Doctor> getDoctorsByClinicId(Long clinicId) {
        return doctorRepository.findByClinicId(clinicId);
    }

    public Doctor updateDoctor(Long id, Doctor updatedDoctor) {
        return doctorRepository.findById(id).map(existingDoctor -> {
            existingDoctor.setName(updatedDoctor.getName());
            existingDoctor.setSpeciality(updatedDoctor.getSpeciality());
            existingDoctor.setRegistrationNumber(updatedDoctor.getRegistrationNumber());
            existingDoctor.setMobileNumber(updatedDoctor.getMobileNumber());
            existingDoctor.setEmail(updatedDoctor.getEmail());
            existingDoctor.setExperience(updatedDoctor.getExperience());
            existingDoctor.setQualification(updatedDoctor.getQualification());
            searchService.indexDoctor(existingDoctor);
            return doctorRepository.save(existingDoctor);
        }).orElseThrow(() -> new RuntimeException("Doctor not found"));
    }

    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }
}
