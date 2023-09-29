package com.ssafy.backend.domain.tipBox.service;

import com.ssafy.backend.domain.tipBox.TipBox;
import com.ssafy.backend.domain.tipBox.TipCode;
import com.ssafy.backend.domain.tipBox.dto.TipBoxResultDto;
import com.ssafy.backend.domain.tipBox.repository.TipBoxRepository;
import com.ssafy.backend.domain.tipBox.repository.TipCodeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TipBoxService {
    private final TipBoxRepository tipBoxRepository;
    private final TipCodeRepository tipCodeRepository;

    public TipBoxResultDto getTipBox(int leftDay) {
        // leftDay 정제 필요
        List<TipCode> tipCodeList = tipCodeRepository.findAll()
                .stream()
                .sorted(Comparator.comparing(TipCode::getLeftDay))
                .collect(Collectors.toList());
        TipCode findTipCode = null;

        for(TipCode tipCode : tipCodeList){
                if(leftDay <= tipCode.getLeftDay()){
                    leftDay = tipCode.getLeftDay();
                    findTipCode = tipCode;
                    break;
                }
        }

        if(findTipCode == null){
            leftDay = Math.min(leftDay, tipCodeList.get(tipCodeList.size()-1).getLeftDay());
            findTipCode = tipCodeList.get(tipCodeList.size()-1);
        }

        // 팁박스에서 컨텐츠만 뽑아서 리스트 반복안하게 리팩 가능함
//        List<TipBox> tipBoxList = tipBoxRepository.findAllByTipCodeId(findTipCode.getId());
//        List<String> contents = new ArrayList<>();
        // 스트림으로 리팩가능 숙제에요
//
//        for(TipBox tipBox : tipBoxList){
//            contents.add(tipBox.getContent());
//        }
        List<String> contents = tipBoxRepository.findContentByTipCode(leftDay);
        return new TipBoxResultDto(leftDay, findTipCode.getTitle(), contents, findTipCode.getImage());

    }
}
