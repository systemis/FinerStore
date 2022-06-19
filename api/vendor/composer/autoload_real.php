<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitb303e5e2d09010c8ba8ab1ec3dc59f68
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitb303e5e2d09010c8ba8ab1ec3dc59f68', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitb303e5e2d09010c8ba8ab1ec3dc59f68', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitb303e5e2d09010c8ba8ab1ec3dc59f68::getInitializer($loader));

        $loader->register(true);

        $includeFiles = \Composer\Autoload\ComposerStaticInitb303e5e2d09010c8ba8ab1ec3dc59f68::$files;
        foreach ($includeFiles as $fileIdentifier => $file) {
            composerRequireb303e5e2d09010c8ba8ab1ec3dc59f68($fileIdentifier, $file);
        }

        return $loader;
    }
}

/**
 * @param string $fileIdentifier
 * @param string $file
 * @return void
 */
function composerRequireb303e5e2d09010c8ba8ab1ec3dc59f68($fileIdentifier, $file)
{
    if (empty($GLOBALS['__composer_autoload_files'][$fileIdentifier])) {
        $GLOBALS['__composer_autoload_files'][$fileIdentifier] = true;

        require $file;
    }
}
