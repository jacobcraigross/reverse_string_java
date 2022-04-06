// create a method that takes a string and reverses it.

public class reverseString {
    
    public static void main(String[] args) {
        String inputString = "paint it black.";
        String outputString = "";
        int count = inputString.length();

        for (int i = count - 1; i >= 0; i--) {
            outputString = outputString + inputString.charAt(i);
        }
        System.out.println(outputString);
    }
    
}
