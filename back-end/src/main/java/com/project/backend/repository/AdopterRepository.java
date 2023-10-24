package com.project.backend.repository;

import com.project.backend.model.Admin;
import com.project.backend.model.Adopter;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AdopterRepository extends CrudRepository<Adopter, Integer> {
    @Query("SELECT a FROM Adopter a WHERE CONCAT(a.firstName, ' ', a.lastName) LIKE %:name%")
    List<Adopter> findByName(@Param("name") String name);

    @Query("SELECT a FROM Adopter a WHERE CONCAT(a.email) LIKE %:email%")
    List<Adopter> findByEmail(@Param("email")String email);

    @Query("SELECT a FROM Adopter a WHERE CONCAT(a.phoneNumber) LIKE %:phone%")
    List<Adopter> findByPhoneNumber(@Param("phone")String phoneNumber);

    @Query("SELECT a FROM Adopter a WHERE a.email = :email")
    Adopter findUserByEmail(@Param("email") String email);

    @Query("SELECT a FROM Adopter a WHERE a.password = :password")
    Adopter findUserByPassword(@Param("password") String pass);
}
