package com.practo.ElasticSearchAssignment.controller;

import com.practo.ElasticSearchAssignment.entity.Doctor;
import com.practo.ElasticSearchAssignment.index.DoctorIndex;
import com.practo.ElasticSearchAssignment.service.DoctorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.practo.ElasticSearchAssignment.service.SearchService;


import java.util.List;

@RestController
@RequestMapping("/doctors")
public class DoctorController {
    private final DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @PostMapping("/{clinicId}")
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor, @PathVariable Long clinicId) {
        return ResponseEntity.ok(doctorService.createDoctor(doctor, clinicId));
    }

    @GetMapping
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        return ResponseEntity.ok(doctorService.getAllDoctors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable Long id) {
        return doctorService.getDoctorById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @GetMapping("/clinic/{clinicId}")
    public ResponseEntity<List<Doctor>> getDoctorsByClinic(@PathVariable Long clinicId) {
        return ResponseEntity.ok(doctorService.getDoctorsByClinicId(clinicId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long id, @RequestBody Doctor doctor) {
        return ResponseEntity.ok(doctorService.updateDoctor(id, doctor));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
        return ResponseEntity.noContent().build();
    }

}
