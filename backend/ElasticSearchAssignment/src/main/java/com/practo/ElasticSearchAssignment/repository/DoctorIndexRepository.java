package com.practo.ElasticSearchAssignment.repository;

import com.practo.ElasticSearchAssignment.index.DoctorIndex;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import javax.print.Doc;
import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorIndexRepository extends ElasticsearchRepository<DoctorIndex, String> {
    List<DoctorIndex> findByNameContainingOrSpecialityContaining(String name, String speciality);

    List<DoctorIndex> findByNameContainingIgnoreCase(String name);

    List<DoctorIndex> findBySpecialityContainingIgnoreCase(String speciality);

    Optional<DoctorIndex> findById(String id);
}
