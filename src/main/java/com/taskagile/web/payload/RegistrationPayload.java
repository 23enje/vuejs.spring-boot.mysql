package com.taskagile.web.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.taskagile.domain.application.commands.RegistrationCommand;

public class RegistrationPayload {
  @Size(min = 2, max = 50, message = "사용자 이름 5자에서 50자 사이여야 합니다.")
  @NotNull
  private String username;

  @Email(message = "이메일 주소가 유효해야 합니다..")
  @Size(max = 100, message = "이메일은 100자를 넘을 수 없습니다.")
  @NotNull
  private String emailAddress;

  @Size(min = 6, max = 30, message = "비밀번호는 6자에서 30자 사이여야 합니다.")
  @NotNull
  private String password;

  public RegistrationCommand toCommand() {
    return new RegistrationCommand(this.username, this.emailAddress, this.password);
  }

  public String getUsername() {
    return this.username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmailAddress() {
    return this.emailAddress;
  }

  public void setEmailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
