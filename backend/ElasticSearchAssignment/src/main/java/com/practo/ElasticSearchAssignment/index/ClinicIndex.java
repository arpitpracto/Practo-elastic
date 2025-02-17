package com.practo.ElasticSearchAssignment.index;

import jakarta.persistence.Id;
import lombok.ToString;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@ToString
@Document(indexName = "clinics")
public class ClinicIndex {
    @Id
    private String id;

    @Field(type = FieldType.Text)
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
