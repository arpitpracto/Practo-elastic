package com.practo.ElasticSearchAssignment.controller;

import com.practo.ElasticSearchAssignment.index.ClinicIndex;
import com.practo.ElasticSearchAssignment.index.DoctorIndex;
import com.practo.ElasticSearchAssignment.service.SearchService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/search")
public class SearchController {
    private final SearchService searchService;

    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping("/doctors")
    public List<DoctorIndex> searchDoctors(@RequestParam String query) {
        return searchService.searchDoctors(query);
    }

    @GetMapping("/clinics")
    public List<ClinicIndex> searchClinics(@RequestParam String query) {
        return searchService.searchClinics(query);
    }
    @GetMapping
    public Map<String, Object> search(@RequestParam String query) {
        return searchService.search(query);
    }
}
