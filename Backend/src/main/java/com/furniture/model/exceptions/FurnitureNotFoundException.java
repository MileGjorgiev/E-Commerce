package com.furniture.model.exceptions;

public class FurnitureNotFoundException extends RuntimeException {
    public FurnitureNotFoundException() {
        super("Furniture not found");
    }
}
