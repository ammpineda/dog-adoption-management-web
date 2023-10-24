package com.project.backend.controller;

import com.project.backend.model.Admin;
import com.project.backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/register-admin")
    public Admin registerAdmin(@RequestBody Admin admin){
        return adminService.registerAdmin(admin);
    }
    @GetMapping("/get-admin/{adminId}")
    public Admin getAdminById(@PathVariable int adminId){
        return adminService.getAdminById(adminId);
    }
    @GetMapping("/all-admin")
    public List<Admin> getAllAdmins(){
        return adminService.getAllAdmins();
    }
    @DeleteMapping("/delete-admin/{adminId}")
    public void deleteAdmin(@PathVariable int adminId){
        adminService.deleteAdmin(adminId);
    }

    @GetMapping("/get-admin/email/{email}")
    public ResponseEntity<Admin> getAdminByEmail(@PathVariable String email) {
        Admin admin = adminService.getAdminByEmail(email);

        if (admin != null) {
            return new ResponseEntity<>(admin, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
