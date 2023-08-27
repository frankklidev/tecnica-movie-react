
import { motion } from 'framer-motion';

function ErrorComponent() {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: 'red', fontSize: '1.5em' }}
        >
            Hubo un error al cargar las películas. Por favor, inténtalo de nuevo.
        </motion.div>
    );
}

export default ErrorComponent;
