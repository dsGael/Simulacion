
import java.io.*;
import java.net.*;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) throws Exception {
        String baseUrl = "http://localhost:3000/productos";

        String json = """
            {
              "id": 9876543210123,
              "nombre": "JavaLatte",
              "precio": 12.50,
              "image": "javalatte321.png"
            }
        """;

        HttpURLConnection conn = (HttpURLConnection) new URL(baseUrl).openConnection();
        conn.setDoOutput(true);
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");

        try (OutputStream os = conn.getOutputStream()) {
            os.write(json.getBytes(StandardCharsets.UTF_8));
        }

        System.out.println("POST: " + conn.getResponseCode());

        URL getUrl = new URL(baseUrl + "/9876543210123");
        HttpURLConnection getConn = (HttpURLConnection) getUrl.openConnection();
        getConn.setRequestMethod("GET");
        System.out.println("GET: " + getConn.getResponseCode());

    }
}
