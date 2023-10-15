package com.project.backend.service;

import com.project.backend.model.Admin;
import com.project.backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    AdminRepository adminRepository;

    public Admin registerAdmin(Admin admin){
        return adminRepository.save(admin);
    }
    public void deleteAdmin(int adminId){
        adminRepository.deleteById(adminId);
    }
    public Admin getAdminById(int adminId){
        return adminRepository.findById(adminId)
                .orElse(null);
    }
    public List<Admin> getAllAdmins(){
        return (List<Admin>) adminRepository.findAll();
    }
}
