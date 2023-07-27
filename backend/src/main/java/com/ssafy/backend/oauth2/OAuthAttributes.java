package com.ssafy.backend.oauth2;

import java.util.Map;

import com.ssafy.backend.domain.user.Role;
import com.ssafy.backend.domain.user.User;
import com.ssafy.backend.oauth2.userinfo.KakaoOAuth2UserInfo;
import com.ssafy.backend.oauth2.userinfo.OAuth2UserInfo;

import lombok.Builder;
import lombok.Getter;

/**
 * 각 소셜에서 받아오는 데이터가 다르므로
 * 소셜별로 데이터를 받는 데이터를 분기 처리하는 DTO 클래스
 */
@Getter
public class OAuthAttributes {

	private final String nameAttributeKey; // OAuth2 로그인 진행 시 키가 되는 필드 값, PK와 같은 의미
	private final OAuth2UserInfo oauth2UserInfo; // 소셜 타입별 로그인 유저 정보(닉네임, 이메일, 프로필 사진 등등)

	@Builder
	public OAuthAttributes(String nameAttributeKey, OAuth2UserInfo oauth2UserInfo) {
		this.nameAttributeKey = nameAttributeKey;
		this.oauth2UserInfo = oauth2UserInfo;
	}

	/**
	 * 파라미터 : userNameAttributeName -> OAuth2 로그인 시 키(PK)가 되는 값 / attributes : OAuth 서비스의 유저 정보들
	 * 각각 소셜 로그인 API에서 제공하는
	 * 회원의 식별값(id), attributes, nameAttributeKey를 저장 후 build
	 */
	public static OAuthAttributes of(String userNameAttributeName, Map<String, Object> attributes) {
		return OAuthAttributes.builder()
			.nameAttributeKey(userNameAttributeName)
			.oauth2UserInfo(new KakaoOAuth2UserInfo(attributes))
			.build();
	}

	/**
	 * of메소드로 OAuthAttributes 객체가 생성되어, 유저 정보들이 담긴 OAuth2UserInfo가 소셜 타입별로 주입된 상태
	 * OAuth2UserInfo에서 socialId(식별값), nickname, eamil, gender를 가져와서 build
	 * role은 GUEST로 설정
	 */
	public User toEntity(OAuth2UserInfo oauth2UserInfo) {
		return User.builder()
			.socialId(oauth2UserInfo.getId())
			.email(oauth2UserInfo.getEmail())
			.nickname(oauth2UserInfo.getNickname())
			.gender(oauth2UserInfo.getGender())
			.role(Role.GUEST)
			.build();
	}
}
