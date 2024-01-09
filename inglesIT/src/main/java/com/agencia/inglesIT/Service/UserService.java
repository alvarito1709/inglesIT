package com.agencia.inglesIT.Service;


import com.agencia.inglesIT.Dao.UserDao;
import com.agencia.inglesIT.entities.Rol;
import com.agencia.inglesIT.entities.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service("userDetailsService")
@Slf4j
public class UserService implements UserDetailsService {
    @Autowired
    private UserDao userDao;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.findByUsername(username);
    if(user == null){
        throw new UsernameNotFoundException(username);
    }
    var roles = new ArrayList<GrantedAuthority>();
    for(Rol rol : user.getRoles()){
        roles.add(new SimpleGrantedAuthority(rol.getNombre()));
    }
    return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(), roles);
    }
}
