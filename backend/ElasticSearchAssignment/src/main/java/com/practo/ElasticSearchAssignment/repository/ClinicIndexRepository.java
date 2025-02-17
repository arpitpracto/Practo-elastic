package com.practo.ElasticSearchAssignment.repository;

import com.practo.ElasticSearchAssignment.index.ClinicIndex;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClinicIndexRepository extends ElasticsearchRepository<ClinicIndex, String> {
    List<ClinicIndex> findByNameContaining(String name);
    List<ClinicIndex> findByNameContainingIgnoreCase(String query);
}
