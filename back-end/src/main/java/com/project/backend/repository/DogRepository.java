package com.project.backend.repository;

import com.project.backend.model.Dog;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DogRepository extends CrudRepository<Dog, Integer> {
    @Query("SELECT a FROM Dog a WHERE CONCAT(a.name) LIKE %:name%")
    List<Dog> findByName(@Param("name") String name);

    List<Dog> findByGender(String gender);

    List<Dog> findByAdoptionStatus(String adoptionStatus);
}
