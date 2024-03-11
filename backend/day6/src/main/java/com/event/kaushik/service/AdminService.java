package com.event.kaushik.service;

import com.event.kaushik.DTO.AdminDto;

public interface AdminService {
    void createAdmin(AdminDto adminDto);
    AdminDto getAdminById(int adminId);
    boolean updateAdmin(int adminId, AdminDto adminDto);
    boolean deleteAdmin(int adminId);
}
