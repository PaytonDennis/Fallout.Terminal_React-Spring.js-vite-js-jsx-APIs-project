package com.example.backend;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class oopPractice {

    public static String getMainMessage() {
        return "OOP Practice!";
    }

    public static String displayMessage() {
        return "!";
    }

    public static void main(String[] args) {
        ArrayList<Integer> numbersA = new ArrayList<Integer>();

        numbersA.add(1);
        numbersA.add(2);
        numbersA.add(3);
        System.out.println("Numbers in ArrayList: " + numbersA);

    }

    public static void doStuff() {
        int a = 10;
        int b = 20;

        if (b > a) {
            System.out.println("b is greater than a");
        } else {
            System.out.println("a is greater than or equal to b");
        }

    }

    public static void forLoop() {
        int a = 5;
        for (int i = 0; i < 5; i++) {
            System.out.println("Value of i: " + i);
        }
    }

}
