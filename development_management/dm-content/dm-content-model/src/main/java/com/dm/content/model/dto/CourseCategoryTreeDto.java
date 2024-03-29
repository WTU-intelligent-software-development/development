package com.dm.content.model.dto;

import com.dm.content.model.po.CourseCategory;
import lombok.Data;

import java.util.List;

/**
 * @author Mr.M
 * @version 1.0
 * @description TODO
 * @date 2024/3/27 11:29
 */
@Data
public class CourseCategoryTreeDto extends CourseCategory implements java.io.Serializable {

   //子节点
   List<CourseCategoryTreeDto> childrenTreeNodes;

}
