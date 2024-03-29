package com.dm.content;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dm.base.model.PageParams;
import com.dm.base.model.PageResult;
import com.dm.content.mapper.CourseBaseMapper;
import com.dm.content.model.dto.QueryCourseParamsDto;
import com.dm.content.model.po.CourseBase;
import com.dm.content.service.CourseBaseInfoService;
import org.apache.commons.lang3.StringUtils;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author Mr.M
 * @version 1.0
 * @description TODO
 * @date 2024/3/27 11:29
 */
@SpringBootTest
public class CourseBaseInfoServiceTests {

    @Autowired
    CourseBaseInfoService courseBaseInfoService;

    @Test
    public void testCourseBaseInfoService() {
        Hashtable<String, Integer> h = new Hashtable<>();
        ConcurrentHashMap<String, Integer> h2 = new ConcurrentHashMap<>();
        HashMap<String, Integer> h3 = new HashMap<>();
        for(int i=0; i<100; i++){
            h3.put(i+"", i);
        }

        //查询条件
        QueryCourseParamsDto courseParamsDto = new QueryCourseParamsDto();
        courseParamsDto.setCourseName("java");//课程名称查询条件
        courseParamsDto.setAuditStatus("202004");//202004表示课程审核通过
        //分页参数对象
        PageParams pageParams = new PageParams();
        pageParams.setPageNo(2L);
        pageParams.setPageSize(2L);

        PageResult<CourseBase> courseBasePageResult = courseBaseInfoService.queryCourseBaseList(pageParams, courseParamsDto);
        System.out.println(courseBasePageResult);

    }
}
