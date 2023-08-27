
import { motion } from 'framer-motion';

function Navbar() {
    return (
        <motion.div 
            initial={{ y: -60, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
            style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '15px 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '1.5em',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            Películas
        </motion.div>
    );
}

export default Navbar;
