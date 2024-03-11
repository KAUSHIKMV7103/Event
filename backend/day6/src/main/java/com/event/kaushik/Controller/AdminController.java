package com.event.kaushik.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.kaushik.DTO.AdminDto;
import com.event.kaushik.service.AdminService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    AdminService adminService;

    // POST Mapping to create a new admin
    @PostMapping("/new")
    public ResponseEntity<String> createAdmin(@RequestBody AdminDto adminDto) {
        adminService.createAdmin(adminDto);
        return ResponseEntity.ok().body("Admin created successfully");
    }

    // GET Mapping to retrieve an admin by its ID
    @GetMapping("/{adminId}")
    public ResponseEntity<AdminDto> getAdminById(@PathVariable int adminId) {
        AdminDto adminDto = adminService.getAdminById(adminId);
        if (adminDto != null) {
            return ResponseEntity.ok().body(adminDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // PUT Mapping to update an existing admin
    @PutMapping("/{adminId}")
    public ResponseEntity<String> updateAdmin(@PathVariable int adminId, @RequestBody AdminDto adminDto) {
        boolean updated = adminService.updateAdmin(adminId, adminDto);
        if (updated) {
            return ResponseEntity.ok().body("Admin updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE Mapping to delete an existing admin
    @DeleteMapping("/{adminId}")
    public ResponseEntity<String> deleteAdmin(@PathVariable int adminId) {
        boolean deleted = adminService.deleteAdmin(adminId);
        if (deleted) {
            return ResponseEntity.ok().body("Admin deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
