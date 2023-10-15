package com.project.backend.repository;

import com.project.backend.model.Adopter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdopterRepository extends CrudRepository<Adopter, Integer> {
    List<Adopter> findByFirstName(@Param("firstName") String firstName);
    List<Adopter> findByLastName(@Param("lastName") String lastName);
}
