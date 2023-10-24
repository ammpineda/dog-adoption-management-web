package com.project.backend.repository;

import com.project.backend.model.Admin;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends CrudRepository<Admin, Integer> {

    @Query("SELECT a FROM Admin a WHERE a.email = :email")
    Admin findAdminByEmail(@Param("email") String email);

    @Query("SELECT a FROM Admin a WHERE a.password = :password")
    Admin findAdminByPassword(@Param("password") String pass);

}
