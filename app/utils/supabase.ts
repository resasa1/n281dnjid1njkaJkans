import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import "react-native-url-polyfill/auto";

const supabaseUrl = 'https://bhkwnxmmnedcmrqamenu.supabase.co'
const supabaseAnonKey = 'public-anon-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoa3dueG1tbmVkY21ycWFtZW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MjIxNTQsImV4cCI6MjA2NTM5ODE1NH0.YBJOoZuvAsR-VxKz0TnAXSmCNXFMABpUeMSsl2xSqd4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
})
