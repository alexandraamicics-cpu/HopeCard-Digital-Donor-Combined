package com.example.hopecard.ui.forgot

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.text.Editable
import android.text.TextWatcher
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.viewpager2.widget.ViewPager2
import com.example.hopecard.R
import com.example.hopecard.ui.signup.CarouselAdapter
import com.example.hopecard.ui.signup.SignUpActivity

class OtpVerifyActivity : AppCompatActivity() {

    private lateinit var viewPager: ViewPager2
    private val sliderHandler = Handler(Looper.getMainLooper())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_otp_verify)

        // Carousel setup
        viewPager = findViewById(R.id.viewPagerCarousel)
        val images = listOf(R.drawable.img_1, R.drawable.img_2, R.drawable.img_3, R.drawable.img_4)
        viewPager.adapter = CarouselAdapter(images)
        val sliderRunnable = object : Runnable {
            override fun run() {
                viewPager.currentItem = (viewPager.currentItem + 1) % images.size
                sliderHandler.postDelayed(this, 3000)
            }
        }
        sliderHandler.postDelayed(sliderRunnable, 3000)

        val boxes = listOf(
            findViewById<EditText>(R.id.otp_box_1),
            findViewById<EditText>(R.id.otp_box_2),
            findViewById<EditText>(R.id.otp_box_3),
            findViewById<EditText>(R.id.otp_box_4),
            findViewById<EditText>(R.id.otp_box_5),
            findViewById<EditText>(R.id.otp_box_6)
        )

        // Auto-advance focus to next box when a digit is entered
        for (i in boxes.indices) {
            boxes[i].addTextChangedListener(object : TextWatcher {
                override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
                override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {}
                override fun afterTextChanged(s: Editable?) {
                    if (s?.length == 1 && i < boxes.size - 1) {
                        boxes[i + 1].requestFocus()
                    }
                }
            })
        }

        val btnContinue = findViewById<TextView>(R.id.btnContinue)
        btnContinue.setOnClickListener {
            val otp = boxes.joinToString("") { it.text.toString() }
            if (otp.length == 6) {
                // TODO(BACKEND): Verify OTP against backend endpoint.
                startActivity(Intent(this, ResetPasswordActivity::class.java))
            } else {
                Toast.makeText(this, "Please enter all 6 digits", Toast.LENGTH_SHORT).show()
            }
        }

        // Sign up button
        val tvSignUp = findViewById<TextView>(R.id.tvSignUp)
        tvSignUp.setOnClickListener {
            startActivity(Intent(this, SignUpActivity::class.java))
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        sliderHandler.removeCallbacksAndMessages(null)
    }
}
