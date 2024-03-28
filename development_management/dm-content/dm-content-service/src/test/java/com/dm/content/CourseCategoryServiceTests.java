package com.dm.content;

import com.dm.base.model.PageParams;
import com.dm.base.model.PageResult;
import com.dm.content.model.dto.CourseCategoryTreeDto;
import com.dm.content.model.dto.QueryCourseParamsDto;
import com.dm.content.model.po.CourseBase;
import com.dm.content.service.CourseBaseInfoService;
import com.dm.content.service.CourseCategoryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

/**
 * @author Mr.M
 * @version 1.0
 * @description TODO
 * @date 2024/3/27 11:29
 */
@SpringBootTest
public class CourseCategoryServiceTests {

    @Autowired
    CourseCategoryService courseCategoryService;

    @Test
    public void testCourseCategoryService() {

        List<CourseCategoryTreeDto> courseCategoryTreeDtos = courseCategoryService.queryTreeNodes("1");
        System.out.println(courseCategoryTreeDtos);

    }
}
