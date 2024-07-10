package com.furniture.repository;

import com.furniture.model.Furniture;
import com.furniture.model.enumeration.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FurnitureRepository extends JpaRepository<Furniture, Long> {
    List<Furniture> findFurnituresByNameContainingAndPriceBetween(String name,Long start,Long end);
    List<Furniture> findFurnituresByPriceBetween(Long startingPrice, Long endingPrice);
    List<Furniture> findFurnituresByCategoryAndPriceBetween(Category category,Long startingPrice,Long endingPrice);
    List<Furniture> findFurnituresByCategoryAndPriceBetweenAndNameContaining(Category category, Long startingPrice, Long endingPrice, String name);
}
