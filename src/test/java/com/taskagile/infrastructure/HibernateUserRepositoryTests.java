package com.taskagile.infrastructure;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;

import com.taskagile.domain.model.user.User;
import com.taskagile.domain.model.user.UserRepository;
import com.taskagile.infrastructure.repository.HibernateUserRepository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(SpringExtension.class)
@ActiveProfiles("test")
@DataJpaTest
public class HibernateUserRepositoryTests {

  @TestConfiguration
  public static class UserRepositoryTestContextConfiguration {
    @Bean
    public UserRepository userRepository(EntityManager entityManager) {
      return new HibernateUserRepository(entityManager);
    }
  }

  @Autowired
  private UserRepository repository;

  @Test
  public void save_nullUsernameUser_shouldFail() {
    User invalidUser = User.create(null, "sunny@taskagile.com", "MyPassword!");
    assertThrows(PersistenceException.class, () -> {
      repository.save(invalidUser);
    });
  }


}
