package com.sorune.gttapiserver.comment.DTO;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Data
public class PageResponseDTO<E> {

    private List<E> dtoList;

    private List<Integer> pageNumList;

    private PageRequestDTO pageRequestDTO;

    private boolean prev, next;

    private int totalCount, prevPage, nextPage, totalPage, current;

    @Builder(builderMethodName = "withAll")
    private PageResponseDTO(List<E> dtoList, PageRequestDTO pageRequestDTO, long totalCount){
        this.dtoList = dtoList;
        this.pageRequestDTO = pageRequestDTO;
        this.totalPage =(int) totalCount; // long을 강제 타입변환

        int end = (int) (Math.ceil(pageRequestDTO.getPage()/ 10.0)) * 10; // 14 페이지

        int start =end -9; // 시작 페이지는 10 - 9 = 1

        int last = (int) (Math.ceil((totalCount/(double) pageRequestDTO.getPage()))); // 마지막 페이지 10, 20 ,30

        end = end > last ? last : end ;

        this.prev = start > 1;

        this.next = totalCount > end * pageRequestDTO.getSize();

        this.pageNumList = IntStream.rangeClosed(start, end).boxed().collect(Collectors.toList());

        if(prev){
            this.prevPage = start - 1;
        }
        if (next){
            this.nextPage = end + 1 ;
        }

        this.totalPage = this.pageNumList.size();

        this.current = pageRequestDTO.getPage();
    }

}
