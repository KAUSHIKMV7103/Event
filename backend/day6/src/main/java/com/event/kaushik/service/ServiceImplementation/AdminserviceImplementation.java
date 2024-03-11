package com.event.kaushik.service.ServiceImplementation;

import org.springframework.stereotype.Service;

import com.event.kaushik.DTO.AdminDto;
import com.event.kaushik.Entity.Admin;
import com.event.kaushik.repository.AdminRepo;
import com.event.kaushik.service.AdminService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AdminserviceImplementation implements AdminService {
    private final AdminRepo adminRepo;

    @Override
    public void createAdmin(AdminDto adminDto) {
        Admin admin = new Admin();
        admin.setUserName(adminDto.getUsername());
        admin.setPassword(adminDto.getPassword());
        adminRepo.save(admin);
    }

    @Override
    public AdminDto getAdminById(int adminId) {
        Admin admin = adminRepo.findById(adminId).orElse(null);
        if (admin != null) {
            return new AdminDto(admin.getId(), admin.getUserName(), admin.getPassword());
        } else {
            return null;
        }
    }

    @Override
    public boolean updateAdmin(int adminId, AdminDto adminDto) {
        Admin existingAdmin = adminRepo.findById(adminId).orElse(null);
        if (existingAdmin != null) {
            existingAdmin.setUserName(adminDto.getUsername());
            existingAdmin.setPassword(adminDto.getPassword());
            adminRepo.save(existingAdmin);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteAdmin(int adminId) {
        if (adminRepo.existsById(adminId)) {
            adminRepo.deleteById(adminId);
            return true;
        } else {
            return false;
        }
    }
}
